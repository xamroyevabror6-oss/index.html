// Tugmalar uchun
function goToTest(sinf){
    window.location.href = sinf + ".html";
}

// 6-sinf (yosh bolalarga mos) – 20 ta
const questions6 = [
"Do‘stlaringiz bilan o‘ynashni yoqtirasizmi?",
"O‘zingizni sinfda qanday his qilasiz?",
"Yangi narsalarni o‘rganishni yoqtirasizmi?",
"O‘z fikringizni erkin ayta olasizmi?",
"Qiyin vaziyatda yordam so‘raysizmi?",
"Do‘stlaringizni tinglaysizmi?",
"O‘yinlarda qatnashishni yoqtirasizmi?",
"Sinfdagi ishlarni o‘z vaqtida bajarasizmi?",
"Xato qilganda nima qilasiz?",
"O‘qishga qiziqasizmi?",
"Do‘stlaringizga yordam berasizmi?",
"Yangi narsalarga oson moslasha olasizmi?",
"Sizga o‘qish zavqlimi?",
"Sinfda o‘z fikringizni aytishga qo‘rqasizmi?",
"Do‘stlaringizni qadrlaysizmi?",
"O‘zingizni boshqalar bilan solishtirasizmi?",
"O‘qishda muvaffaqiyatga erishishni xohlaysizmi?",
"Stressni boshqarishda qiyinchilik bormi?",
"O‘qishda yordam so‘raysizmi?",
"Xatolardan saboq olasizmi?"
];

// 7-sinf – biroz murakkabroq
const questions7 = [
"Sinfdagi ishlarda faol ishtirok qilasizmi?",
"Do‘stlaringiz bilan muammolarni hal qilasizmi?",
"O‘z fikringizni erkin ayta olasizmi?",
"O‘qishda maqsadingiz bormi?",
"Stressli vaziyatda qanday harakat qilasiz?",
"Do‘stlaringizni tinglaysizmi?",
"Yangi narsalarni o‘rganishni yoqtirasizmi?",
"Qiyin masalani o‘zingiz hal qilasizmi?",
"O‘z ishonchingiz qanday?",
"Do‘stlaringiz sizni eshitadimi?",
"O‘qishda muvaffaqiyatga erishishni xohlaysizmi?",
"Xatolardan saboq olasizmi?",
"O‘zingizni boshqalar bilan solishtirasizmi?",
"Do‘stlaringiz bilan suhbatlashish osonmi?",
"Qiyin ishni boshlashdan oldin nima qilasiz?",
"O‘z maqsadingizni yozasizmi?",
"Yangi odamlar bilan osongina tanishasizmi?",
"O‘z hissiyotlaringizni boshqarasizmi?",
"Sinfda faol ishtirok qilasizmi?",
"Do‘stlaringizga yordam berishga tayyormisiz?"
];

// 8-sinf
const questions8 = [
"O‘zingizni sinfdoshlaringiz bilan solishtirasizmi?",
"O‘qishda muvaffaqiyatga erishish siz uchun muhimmi?",
"Yangi bilimlarni tez o‘rganasizmi?",
"Do‘stlaringiz bilan muammolarni hal qilasizmi?",
"Stressli vaziyatda qanday harakat qilasiz?",
"O‘z fikringizni erkin ayta olasizmi?",
"Jamoada ishlashni yoqtirasizmi?",
"O‘zingizga ishonchingiz qanchalik kuchli?",
"Qiyin vaziyatda yordam so‘raysizmi?",
"O‘qishdan zavqlanasizmi?",
"O‘zingizni boshqarishda qiyinchilik bormi?",
"Do‘stlaringizga yordam berasizmi?",
"Murakkab ishlarni boshlashdan qo‘rqasizmi?",
"O‘qishda reja tuzasizmi?",
"O‘z maqsadingizni yozasizmi?",
"Sinfdoshlaringiz bilan qaror qabul qilasizmi?",
"O‘qishda motivatsiyangiz yuqorimi?",
"Kritik fikrlarni qabul qilasizmi?",
"Yangi odamlar bilan tanishishga qiziqasizmi?",
"Do‘stlaringizni qadrlaysizmi?"
];

// 9-sinf
const questions9 = [
"O‘zingizga ishonchingiz qanchalik kuchli?",
"Qiyin masalalarni mustaqil hal qilasizmi?",
"Jamoada rahbarlik qila olasizmi?",
"Stressli vaziyatda xotirjam bo‘lasizmi?",
"O‘qishda reja tuzish odatlimi?",
"Sinfdoshlaringiz bilan murosaga kelasizmi?",
"Yangi bilimlarni tez o‘rganasizmi?",
"Murakkab ishlarni boshlashdan qo‘rqasizmi?",
"O‘z hissiyotlaringizni boshqara olasizmi?",
"Do‘stlaringiz bilan muammolarni hal qilasizmi?",
"O‘qishda muvaffaqiyatga erishishga intilasizmi?",
"Sinfdagi qarorlar qabul qilishda ishtirok qilasizmi?",
"O‘zingizni vaqtni boshqarishda muvaffaqiyatlimisiz?",
"Do‘stlaringizga yordam berishga tayyormisiz?",
"Kritik fikrlarni qabul qilasizmi?",
"O‘qishda motivatsiyangiz yuqorimi?",
"Jamoada ishlashni yoqtirasizmi?",
"Do‘stlaringizni qadrlaysizmi?",
"O‘z fikringizni erkin ayta olasizmi?",
"Yangi odamlar bilan osongina tanishasizmi?"
];

// 10-sinf
const questions10 = [
"O‘z qarorlaringizga ishonchingiz qanchalik kuchli?",
"Murakkab masalalarni mustaqil hal qilasizmi?",
"Jamoada rahbarlik qilishni yoqtirasizmi?",
"Stressli vaziyatda xotirjam bo‘lasizmi?",
"O‘qishda reja tuzish odatlimi?",
"Kritik fikrlarni qabul qilasizmi?",
"Sinfdoshlaringiz bilan murosaga kelasizmi?",
"Yangi bilimlarni tez o‘rganasizmi?",
"Murakkab ishlarni boshlashdan qo‘rqasizmi?",
"O‘z hissiyotlaringizni boshqara olasizmi?",
"Sinfdoshlaringiz bilan qaror qabul qilasizmi?",
"O‘qishda muvaffaqiyatga erishishga intilasizmi?",
"Yangi narsalarni o‘rganishda qiziqasizmi?",
"O‘zingizni vaqtni boshqarishda muvaffaqiyatlimisiz?",
"Do‘stlaringizga yordam berishga tayyormisiz?",
"Stressli vaziyatlarda yordam so‘raysizmi?",
"O‘qishda motivatsiyangiz yuqorimi?",
"Sinfdagi muammolarni mustaqil hal qilasizmi?",
"O‘zingizni boshqalar bilan solishtirasizmi?",
"Do‘stlaringiz bilan suhbatlashish osonmi?"
];

// 11-sinf
const questions11 = [
"O‘zingizga ishonchingiz qanchalik kuchli?",
"Murakkab masalalarni mustaqil hal qilasizmi?",
"Jamoada rahbarlik qilishni yoqtirasizmi?",
"Stressli vaziyatda xotirjam bo‘lasizmi?",
"O‘qishda reja tuzish odatlimi?",
"Kritik fikrlarni qabul qilasizmi?",
"Sinfdoshlaringiz bilan murosaga kelasizmi?",
"Yangi bilimlarni tez o‘rganasizmi?",
"Murakkab ishlarni boshlashdan qo‘rqasizmi?",
"O‘z hissiyotlaringizni boshqara olasizmi?",
"O‘qishda muvaffaqiyatga erishishga intilasizmi?",
"Sinfdagi qarorlar qabul qilishda ishtirok qilasizmi?",
"O‘zingizni vaqtni boshqarishda muvaffaqiyatlimisiz?",
"Do‘stlaringizga yordam berishga tayyormisiz?",
"O‘qishda motivatsiyangiz yuqorimi?",
"Do‘stlaringiz bilan muammolarni hal qilasizmi?",
"O‘zingizni boshqalar bilan solishtirasizmi?",
"Yangi odamlar bilan osongina tanishasizmi?",
"Jamoaviy ishda faol ishtirok qilasizmi?",
"O‘z fikringizni erkin ayta olasizmi?"
];

// Savollarni chiqarish
function loadQuiz(){
    const cls = parseInt(document.body.getAttribute("data-class"));
    let questions = [];
    if(cls===6) questions = questions6;
    else if(cls===7) questions = questions7;
    else if(cls===8) questions = questions8;
    else if(cls===9) questions = questions9;
    else if(cls===10) questions = questions10;
    else if(cls===11) questions = questions11;

    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    questions.forEach((q,i)=>{
        const div = document.createElement("div");
        div.innerHTML = `<p>${i+1}. ${q}</p>`;
        ["Ha","Ba’zida","Yo‘q"].forEach((ans,j)=>{
            div.innerHTML += `<label><input type="radio" name="q${i}" value="${j}"> ${ans}</label><br>`;
        });
        quizDiv.appendChild(div);
    });
}

// Yakunlash
function finishTest(){
    const cls=parseInt(document.body.getAttribute("data-class"));
    let questions = [];
    if(cls===6) questions = questions6;
    else if(cls===7) questions = questions7;
    else if(cls===8) questions = questions8;
    else if(cls===9) questions = questions9;
    else if(cls===10) questions = questions10;
    else if(cls===11) questions = questions11;

    let total=0;
    questions.forEach((q,i)=>{
        const sel=document.querySelector(`input[name="q${i}"]:checked`);
        if(sel) total+=parseInt(sel.value);
    });

    let text="";
    if(total>=25) text="Siz o‘zingizga ishonchli va faol o‘quvchisiz 👍";
    else if(total>=15) text="Siz o‘rtacha darajada faol 🙂";
    else text="Sizga ko‘proq dam olish va o‘ziga ishonch kerak 💙";

    document.getElementById("result").innerText=text;
}

// Asosiy menu
function backToMenu(){ window.location.href="index.html"; }

window.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementById("quiz")) loadQuiz();
});
