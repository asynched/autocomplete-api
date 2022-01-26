mod search;

use search::core::{do_query, Product};
use search::fs::parse_file;
use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};

fn main() {
    let server = TcpListener::bind("127.0.0.1:1337")
        .expect("Couldn't bind the server to port :1337, is it available?");

    let contents = std::fs::read_to_string("../data/dump.json").unwrap();
    let products: Vec<Product> = parse_file(&contents);

    for stream in server.incoming() {
        handle_connection(stream.unwrap(), &products);
    }
}

fn handle_connection(mut stream: TcpStream, products: &Vec<Product>) {
    loop {
        let mut raw_query = [0; 512];

        stream.read(&mut raw_query).unwrap();
        let query = std::str::from_utf8(&raw_query)
            .unwrap()
            .trim_matches(char::from(0))
            .trim();

        let result = do_query(query, &products);

        stream.write(result.as_bytes()).unwrap();
    }
}
