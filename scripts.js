<script>
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
        btn.className = "duration-button px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-indigo-400 to-purple-500 text-white";
        btn.onclick = () => selectDuration(key, btn);
        container.appendChild(btn);
    }

    setupPaymentButtons();
}

function selectDuration(durationKey, btnElement) {
    selectedDuration = durationKey;

    document.querySelectorAll(".duration-button").forEach(btn => {
        btn.classList.remove("selected");
    });

    btnElement.classList.add("selected");

    document.getElementById("payment-options").classList.remove("hidden");
    updateTotalPrice();
}

function setupPaymentButtons() {
    const paymentOptions = document.getElementById("payment-options");

    paymentOptions.innerHTML = `
        <p class="mb-2"><strong>Способ оплаты:</strong></p>
        <div class="flex gap-4 mb-6">
            <button id="payment-semena" class="payment-button px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-indigo-400 to-purple-500 text-white" onclick="selectPayment('Семена', this)">Семена</button>
            <button id="payment-dc" class="payment-button px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-green-400 to-teal-500 text-white" onclick="selectPayment('DigitalCoins', this)">DigitalCoins</button>
        </div>
        <p id="total-price" class="mb-6 font-bold text-lg"></p>
        <button id="pay-button" class="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            Оплатить в боте
        </button>
    `;

    document.getElementById("pay-button").onclick = payInBot;
}

function selectPayment(paymentMethod, btnElement) {
    selectedPayment = paymentMethod;

    document.querySelectorAll(".payment-button").forEach(btn => {
        btn.classList.remove("selected");
    });

    btnElement.classList.add("selected");
    updateTotalPrice();
}

function updateTotalPrice() {
    if (!selectedDuration || !selectedPayment) return;

    let price = selectedPayment === "Семена" ? DURATIONS[selectedDuration][2] : DURATIONS[selectedDuration][3];
    document.getElementById("total-price").textContent = `Итого к оплате: ${price} ${selectedPayment}`;
}

function payInBot() {
    if (!selectedDuration || !selectedPayment) {
        alert("Выберите длительность и способ оплаты!");
        return;
    }

    const url = `https://t.me/FernieUIBot?start=fernieplus_${selectedDuration}_${selectedPayment}`;
    window.open(url, "_blank");
}
</script>
