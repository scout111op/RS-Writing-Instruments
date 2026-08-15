export const defaultMerchantReturnPolicy = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'IN',
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: 7,
  returnMethod: 'https://schema.org/ReturnByMail',
  returnFees: 'https://schema.org/FreeReturn',
  refundType: 'https://schema.org/FullRefund',
};

export const defaultShippingDetails = {
  '@type': 'OfferShippingDetails',
  shippingRate: {
    '@type': 'MonetaryAmount',
    value: '0',
    currency: 'INR',
  },
  shippingDestination: {
    '@type': 'DefinedRegion',
    addressCountry: 'IN',
  },
  deliveryTime: {
    '@type': 'ShippingDeliveryTime',
    handlingTime: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 2,
      unitCode: 'DAY',
    },
    transitTime: {
      '@type': 'QuantitativeValue',
      minValue: 2,
      maxValue: 5,
      unitCode: 'DAY',
    },
  },
};

export interface ProductSchemaOptions {
  name: string;
  description: string;
  image: string | string[];
  sku: string;
  mpn?: string;
  price: string | number;
  priceCurrency?: string;
  url?: string;
  category?: string;
  ratingValue?: string | number;
  reviewCount?: string | number;
}

export function createProductSchema(options: ProductSchemaOptions) {
  const images = Array.isArray(options.image)
    ? options.image.map((img) => (img.startsWith('http') ? encodeURI(img) : `https://www.rswriting.in${encodeURI(img)}`))
    : [options.image.startsWith('http') ? encodeURI(options.image) : `https://www.rswriting.in${encodeURI(options.image)}`];

  const canonicalUrl = options.url || 'https://www.rswriting.in/pens';

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${canonicalUrl}#product-${options.sku.toLowerCase()}`,
    name: options.name,
    description: options.description,
    image: images,
    sku: options.sku,
    mpn: options.mpn || options.sku,
    category: options.category || 'Office Supplies > Writing Instruments > Fountain Pens',
    brand: {
      '@type': 'Brand',
      name: 'RS Writing Instruments',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(options.ratingValue || '4.9'),
      reviewCount: String(options.reviewCount || '38'),
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      '@id': `${canonicalUrl}#offer-${options.sku.toLowerCase()}`,
      url: canonicalUrl,
      price: String(options.price),
      priceCurrency: options.priceCurrency || 'INR',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'RS Writing Instruments',
        url: 'https://www.rswriting.in',
      },
      hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
      shippingDetails: defaultShippingDetails,
    },
  };
}
