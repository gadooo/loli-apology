import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, LockKeyhole, MessageCircleHeart, Sparkles, ArrowDown, CheckCircle2 } from "lucide-react";
import "./styles.css";

const promises = [
  "ما أخلي الوضوح بينا حاجة مؤجلة.",
  "لو في حاجة مهمة، أقولها ليك بصراحة بدل ما أخليكي تعرفيها بطريقة توجعك.",
  "أسمعك للنهاية، وما أدافع عن نفسي قبل ما أفهم وجعك.",
  "أثبت ليك بالأفعال إن ثقتك في محلها."
];

function App() {
  const [opened, setOpened] = useState(false);
  const [forgiven, setForgiven] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHearts(prev => [...prev.slice(-10), {
        id: Date.now(),
        left: Math.random() * 92 + 2,
        duration: 4 + Math.random() * 3
      }]);
    }, 900);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="app">
      {hearts.map(h => (
        <span key={h.id} className="floating-heart" style={{left: `${h.left}%`, animationDuration: `${h.duration}s`}}>♥</span>
      ))}

      <section className="hero">
        <div className="badge"><Heart size={15} fill="currentColor"/> رسالة من قلبي</div>
        <h1>لولي حبيبتي ❤️</h1>
        <p className="hero-text">
          أنا ما عملت التطبيق دا عشان أطلب منك تنسي الزعل بسرعة...
          عملتو عشان أقول ليك حاجة أهم: <strong>أنا عارف إني كسرت ثقتك فيني.</strong>
        </p>
        <button className="primary" onClick={() => document.getElementById("letter").scrollIntoView({behavior:"smooth"})}>
          اقري رسالتي <ArrowDown size={18}/>
        </button>
      </section>

      <section id="letter" className="card letter">
        <div className="icon"><MessageCircleHeart/></div>
        <p className="eyebrow">أنا آسف يا لولي</p>
        <h2>الثقة ما بتتصلح بكلمة "آسف" بس.</h2>
        <p>
          أنا عارف إن في حاجتين ما كنت واضح فيهم، وده وجعك وخلاك تشوفي الموضوع
          بطريقة ما كنت أتمنى تشوفي بيها الشخص البتحبيه. <b>أنا ما حأبرر الغلط.</b>
        </p>
        <p>
          حقك تزعلي، وحقك تشكي، وحقك تاخدي وقتك. وأنا ما عايز أضغط عليك عشان
          تسامحيني. أنا بس عايز أكون صريح معاك من هنا ورايح، وأخلي أفعالي هي
          البتتكلم عني.
        </p>
        <p className="signature">بحبك، ووجودك في حياتي ما حاجة عايز أخسرها. ❤️</p>
      </section>

      <section className="promise-section">
        <div className="section-title">
          <Sparkles/>
          <h2>الحاجة البقدر أوعدك بيها</h2>
        </div>
        <div className="grid">
          {promises.map((p, i) => (
            <div className="promise" key={p}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card lock-card">
        <LockKeyhole size={30}/>
        <h2>في حاجة عايزك تعرفيها</h2>
        <p>
          أنا ما بطلب منك ترجعي تثقي فيني عشان التطبيق جميل أو الكلام مؤثر.
          الثقة حأرجع أبنيها معاك يوم ورا يوم، وبالوضوح البتستحقيه.
        </p>
        {!opened ? (
          <button className="primary" onClick={() => setOpened(true)}>افتحي آخر رسالة ❤️</button>
        ) : (
          <div className="reveal">
            <p>يا لولي...</p>
            <p>
              لو الزمن رجع، كنت حأختار الوضوح من البداية. ما عايز أكون الشخص
              البخليكي تسألي نفسك: "هل هو صادق معاي؟"
            </p>
            <p>
              عايزك تكوني مطمنة معاي، حتى لو الحقيقة صعبة. لأن حب بدون أمان
              ووضوح ما بكفي.
            </p>
            <strong>أنا آسف. وهسي دوري أثبت ليك إن الكلام دا ما مجرد كلام.</strong>
          </div>
        )}
      </section>

      <section className="final">
        <Heart className="big-heart" fill="currentColor"/>
        <h2>لولي، أنا ما عايز أكسب النقاش...</h2>
        <p>أنا عايز أكسب ثقتك من جديد، لو يومًا قررتي تديني الفرصة.</p>
        <button className={forgiven ? "primary done" : "primary"} onClick={() => setForgiven(true)}>
          {forgiven ? <><CheckCircle2/> وصلتني رسالتك ❤️</> : "لو وصلتك رسالتي اضغطي هنا"}
        </button>
        <small>ما في ضغط، وما في استعجال. خدي وقتك.</small>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
