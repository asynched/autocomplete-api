use serde::{Deserialize, Serialize};
use serde_json;

#[derive(Serialize, Deserialize)]
pub struct Product {
    id: String,
    name: String,
    price: f64,
    old_price: Option<f64>,
    seller: String,
    image_url: String,
    installments: Installments,
}

#[derive(Serialize, Deserialize)]
struct Installments {
    amount: f64,
    quantity: u8,
}

pub fn do_query(query: &str, products: &Vec<Product>) -> String {
    let found_products = products
        .iter()
        .filter(|p| p.name.to_lowercase().contains(&query))
        .collect::<Vec<&Product>>();

    serde_json::to_string(&found_products).unwrap()
}
