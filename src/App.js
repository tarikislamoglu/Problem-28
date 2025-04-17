import { MinusIcon } from "@heroicons/react/24/solid";
import { HiMiniPlus, HiMiniArrowPath } from "react-icons/hi2";
import { useReducer } from "react";

// ✨ Artırma/azaltma butonlarına basıldığında hafifçe büyüme efekti ekleyin (scale-110 transition-transform).
// ✨ Butonlar tıklanınca 200ms boyunca shadow-lg ile hafif bir gölge efekti kazansın.
// ✨ Sayaç belirli bir değere ulaştığında (örn: 5), animasyonlu bir kutlama efekti ekleyin (animate-pulse).
// ✨ group özelliğini kullanarak butona hover yapıldığında ebeveyn div’in de hafifçe renk değiştirmesini sağlayın.
// ✨ Kullanıcı Tab tuşuyla navigasyon yaparken butonların daha belirgin hale gelmesini sağlayın (focus-visible:ring-4).
// ✨ Eğer count === 0 ise, "Sıfırla" butonu devre dışı kalsın ve soluk görünsün (opacity-50 cursor-not-allowed).

function reducer(count, action) {
  if (action.type === "decrement") {
    return count - 1;
  } else if (action.type === "increment") {
    return count + 1;
  } else if (action.type === "reset") {
    return (count = 0);
  }
}

export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0);

  const buttonClass =
    "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-125 active:shadow-md transition-transform duration-200 focus-visible:ring-4";
  const iconClass = "-ml-0.5 mr-1.5 h-5 w-5";

  return (
    <div className="text-center p-8 w-[350px] border-2 border-indigo-600 rounded-md bg-slate-200">
      <h3
        className={`text-white text-lg font-semibold  rounded-md ${
          count <= -10
            ? "bg-red-500 "
            : count >= 10
            ? "bg-green-500"
            : "bg-blue-500"
        } ${count === 5 ? "animate-pulse" : ""}`}
      >
        Şu anki sayı... {count}
      </h3>
      <div className="mt-6 space-x-5">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className={buttonClass}
        >
          <MinusIcon className={iconClass} />1
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className={`${buttonClass} ${
            count === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={count === 0}
        >
          <HiMiniArrowPath className={iconClass} />
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className={`${buttonClass} ${
            count >= 10 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={count >= 10}
        >
          <HiMiniPlus className={iconClass} />1
        </button>
      </div>
      {count <= -10 ? (
        <p className="p-1 bg-red-500 mt-5 rounded-md text-white">
          Değeriniz çok düşük haberirniz olsun{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

// Aşağıdaki CountUp bileşeni, useReducer kullanarak sayaç (counter) bileşeni oluşturmaktadır.
// Amacınız useReducer kullanarak tam fonksiyonel bir counter bileşeni oluşturmaktır.

// ✅ Reducer fonksiyonunu doğru şekilde güncelleyin: Şu an sadece azaltma yapıyor, artırma işlemi de eklenmelidir.
// ✅ "Artır" ve "Azalt" butonları ekleyerek sayıyı dinamik olarak değiştirebilmesini sağlayın.
// ✅ useReducer içinde type değerine bağlı olarak artırma, azaltma ve sıfırlama işlemlerini gerçekleştirin.
// ✅ Sayaç belirli bir sınırın altına düşerse (örn: -10), kullanıcıya bir uyarı verin (console.warn veya ekranda bir mesaj gösterin).
// ✅ Kullanıcının sayacı sıfırlayabileceği bir "Sıfırla" butonu ekleyin.
// ✅ Eğer sayı 10’un üzerine çıkarsa, artırma butonu devre dışı bırakılsın (disabled).

// Bonus:
// ✨ Sayaç değeri belirli aralıklara ulaştığında rengini değiştirin:
//    - count < 0 ise kırmızı (text-red-600), count > 10 ise yeşil (text-green-600).
