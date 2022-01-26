use serde::{Deserialize, Serialize};
use serde_json;

pub fn parse_file<'a, T>(file: &'a String) -> Vec<T>
where
    T: Serialize,
    T: Deserialize<'a>,
{
    let parsed = serde_json::from_str::<Vec<T>>(&file).expect("Couldn't parse source file");

    parsed
}
