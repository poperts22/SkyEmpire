function pokazAdminow() {
    let lista = document.getElementById("admini-lista");
    
    // Pokazuje listę adminów
    lista.style.display = "block";
    
    // Przewija stronę do sekcji adminów
    document.getElementById("admini").scrollIntoView({ behavior: "smooth" });
}
