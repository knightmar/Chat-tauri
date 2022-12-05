#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

mod network;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn connect(ip_adress: &str, port: u16) {
    network::network::connect(ip_adress, port);
}

fn main() {
    network::network::connect("192.168.244.130", 4500);
    // tauri::Builder::default()
    //     .invoke_handler(tauri::generate_handler![greet])
    //     .invoke_handler(tauri::generate_handler![connect])
    //     .run(tauri::generate_context!())
    //     .expect("error while running tauri application");
}