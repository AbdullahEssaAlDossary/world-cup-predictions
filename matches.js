const matches = [
    {"id": "m1", "team1": "إسبانيا", "team2": "السعودية", "team1Code": "es", "team2Code": "sa", "round": 1, "matchTime": "2026-06-21T19:00:00+03:00"},
    {"id": "m2", "team1": "بلجيكا", "team2": "إيران", "team1Code": "be", "team2Code": "ir", "round": 1, "matchTime": "2026-06-21T22:00:00+03:00"},
    {"id": "m3", "team1": "أوروغواي", "team2": "جزر الرأس الأخضر", "team1Code": "uy", "team2Code": "cv", "round": 1, "matchTime": "2026-06-22T04:00:00+03:00"},
    {"id": "m4", "team1": "نيوزيلندا", "team2": "مصر", "team1Code": "nz", "team2Code": "eg", "round": 1, "matchTime": "2026-06-22T07:00:00+03:00"},
    {"id": "m5", "team1": "الأرجنتين", "team2": "النمسا", "team1Code": "ar", "team2Code": "at", "round": 1, "matchTime": "2026-06-22T23:00:00+03:00"},
    {"id": "m6", "team1": "فرنسا", "team2": "العراق", "team1Code": "fr", "team2Code": "iq", "round": 1, "matchTime": "2026-06-23T03:00:00+03:00"}
];

// دالة فحص الديدلاين (قبل المباراة بـ 5 دقائق)
function isPredictionOpen(matchTimeStr) {
    const matchTime = new Date(matchTimeStr);
    const now = new Date();
    const deadline = new Date(matchTime.getTime() - (5 * 60 * 1000));
    
    return now < deadline; 
}
