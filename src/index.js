// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H, Q, D, N, P, result = {};
    currency = parseInt(currency);
    if (currency <= 0) {
        result = {};
    }
    if (currency > 10000) {
        result = { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    if ((currency > 0) && (currency <= 10000)) {
        H = Math.trunc(currency / 50);
        Q = Math.trunc((currency - H * 50) / 25);
        D = Math.trunc((currency - H * 50 - Q * 25) / 10);
        N = Math.trunc((currency - H * 50 - Q * 25 - D * 10) / 5);
        P = Math.trunc(currency - H * 50 - Q * 25 - D * 10 - N * 5);
    }
    if (H > 0) { result["H"] = H };
    if (Q > 0) { result["Q"] = Q };
    if (D > 0) { result["D"] = D };
    if (N > 0) { result["N"] = N };
    if (P > 0) { result["P"] = P };
    return (result);

}
