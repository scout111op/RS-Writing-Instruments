export const WHATSAPP_NUMBER = "919455664795"; // +91 9455664795

export const getWhatsAppLink = (productName: string, price: string): string => {
  const message = `Hello RS Writing Instruments, I am interested in purchasing the ${productName} priced at ${price}. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
