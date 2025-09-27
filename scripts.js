const DURATIONS = {
    "12h": ["12 ч.", 12 * 3600, 50, 75],
    "24h": ["24 ч.", 24 * 3600, 100, 150],
    "3d": ["3 дн.", 3 * 86400, 250, 300],
    "7d": ["7 дн.", 7 * 86400, 725, 750],
    "15d": ["15 дн.", 15 * 86400, 2000, 2500],
    "30d": ["30 дн.", 30 * 86400, 3750, 4500],
    "6m": ["6 мес.", 6 * 30 * 86400, 20000, 22500],
    "1y": ["1 год", 365 * 86400, 40000, 45000]
};

let selectedDuration = null;
let selectedPayment = null;

function goToCheckout() {
    document.getElementById("subscription-page").classList.add("hidden");
    document.getElementById("checkout-page").classList.remove("hidden");

    const container = document.getElementById("duration-buttons");
    container.innerHTML = "";

    for (let key in DURATIONS) {
        let btn = document.createElement("button");
        btn.textContent = DURATIONS[key][0];
        btn.className = "bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 rounded-lg hover:scale-105 transition";
        btn.onclick = () => selectDuration(key);
        container.appendChild(btn);
    }
}

function selectDuration(durationKey) {
    selectedDuration = durationKey;
    document.getElementById("payment-options").classList.remove("hidden");
    updateTotalPrice();
}

function selectPayment(paymentMethod) {
    selectedPayment = paymentMethod;
    updateTotalPrice();
}

function updateTotalPrice() {
    if (!selectedDuration || !selectedPayment) return;

    let price = selectedPayment === "Семена" ? DURATIONS[selectedDuration][2] : DURATIONS[selectedDuration][3];
    document.getElementById("total-price").textContent = `Итого к оплате: ${price} ${selectedPayment}`;
}
