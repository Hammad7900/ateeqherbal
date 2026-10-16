const WC_URL = "https://ateeqherbal.shop";
const CK = "ck_c889b5a21c77088cffdb672db94cfb828b6b151a";
const CS = "cs_d0b4df311fc40dbb0c3944c6ab812f6d96d75d2e";

// Helper function to extract ACF meta fields and variations
const formatProduct = (item) => {
  const getMetaValue = (keyName) => {
    const found = item.meta_data?.find((m) => m.key === keyName);
    return found ? found.value : "";
  };

  // DYNAMIC ATTRIBUTES FUNCTION: Ab yeh khud detect karega ke attribute ka naam kya hai (Liquid, Weight, Size etc.)
  const getDynamicAttributes = () => {
    const attr = item.attributes?.find((a) => a.variation === true) || 
                 (item.attributes && item.attributes.length > 0 ? item.attributes[0] : null);
    
    if (attr && attr.options) {
      return {
        name: attr.name, // Yeh attribute ka actual naam (e.g., "Liquid") utha lega
        options: attr.options.map((opt) => ({
          label: opt,
          price: Number(item.price || item.regular_price || 0),
        }))
      };
    }
    return { name: "Option", options: [] };
  };

  const productPrice = Number(item.price || item.regular_price || 0);
  const varData = getDynamicAttributes();

  return {
    id: item.id.toString(),
    name: item.name,
    price: productPrice,
    image: item.images && item.images[0] ? item.images[0].src : "",
    images: item.images ? item.images.map((img) => img.src) : [],
    categories: item.categories || [], 
    featured: item.featured || false,  
    sizes: varData.options,           // Sab variations/options idhar aayenge
    variationLabel: varData.name,     // Label ka naam (Liquid/Weight) yahan aayega
    description: item.description,
    ingredients: getMetaValue("ingredients"),
    howToUse: getMetaValue("how_to_use"),
    rating: 5,
    reviews: 12,
  };
};

// 1. Tamam Products Fetch Karne Ke Liye (per_page=100 taake saare products ayein)
export const fetchProducts = async () => {
  const url = `${WC_URL}/wp-json/wc/v3/products?consumer_key=${CK}&consumer_secret=${CS}&per_page=100`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.map(formatProduct);
  } catch (error) {
    console.error("WooCommerce Products Fetch Error:", error);
    return [];
  }
};

// 2. Sirf Featured (Star wale) Products fetch karne ke liye (Best Sellers)
export const fetchBestSellers = async () => {
  const url = `${WC_URL}/wp-json/wc/v3/products?consumer_key=${CK}&consumer_secret=${CS}&featured=true&per_page=100`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.map(formatProduct);
  } catch (error) {
    console.error("Best Sellers Fetch Error:", error);
    return [];
  }
};

// 3. Categories Fetch Karne Ke Liye
export const fetchCategories = async () => {
  const url = `${WC_URL}/wp-json/wc/v3/products/categories?consumer_key=${CK}&consumer_secret=${CS}&per_page=100`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Categories Fetch Error:", error);
    return [];
  }
};

// 4. Order Bhejne Ke Liye (Checkout ke liye)
export const createOrder = async (orderData) => {
  const url = `${WC_URL}/wp-json/wc/v3/orders?consumer_key=${CK}&consumer_secret=${CS}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Order Creation Error:", error);
    return null;
  }
};

// 5. Variations (Sizes/Weights/Liquids) Ki Real Price Fetch Karne Ke Liye
export const fetchProductVariations = async (productId) => {
  const url = `${WC_URL}/wp-json/wc/v3/products/${productId}/variations?consumer_key=${CK}&consumer_secret=${CS}&per_page=100`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Variations Fetch Error:", error);
    return [];
  }
};