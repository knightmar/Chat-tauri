pub mod network {
    use std::io::{Read, Write};
    use std::net::{Shutdown, TcpStream};
    use std::str::from_utf8;

    fn handle_connexion(mut stream: TcpStream) {
        println!("handled");
        let msg = b"Hello!";

        stream.write(msg).unwrap();
        println!("Sent Hello, awaiting reply...");

        let mut data = [0 as u8; 6]; // using 6 byte buffer
        match stream.read_exact(&mut data) {
            Ok(_) => {
                if &data == msg {
                    println!("Reply is ok!");
                } else {
                    let text = from_utf8(&data).unwrap();
                    println!("Unexpected reply: {}", text);
                }
            }
            Err(e) => {
                println!("Failed to receive data: {}", e);
            }
        }
    }

    pub fn connect(ip_adress: &str, port: u16) {
        println!("connected");
        let stream = TcpStream::connect(String::from(ip_adress) + ":" + port.to_string().as_str()).expect("TODO: panic message");
        handle_connexion(stream);
    }
}
