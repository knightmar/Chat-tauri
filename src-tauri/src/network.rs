
#[tauri::command]
pub fn connect(ip_adress: String) {
    println!("{}", ip_adress);
}