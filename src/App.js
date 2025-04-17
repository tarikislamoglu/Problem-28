import { MinusIcon } from '@heroicons/react/24/solid'
import { useReducer } from 'react'

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
// ✨ Artırma/azaltma butonlarına basıldığında hafifçe büyüme efekti ekleyin (scale-110 transition-transform).
// ✨ Butonlar tıklanınca 200ms boyunca shadow-lg ile hafif bir gölge efekti kazansın.
// ✨ Sayaç belirli bir değere ulaştığında (örn: 5), animasyonlu bir kutlama efekti ekleyin (animate-pulse).
// ✨ group özelliğini kullanarak butona hover yapıldığında ebeveyn div’in de hafifçe renk değiştirmesini sağlayın.
// ✨ Kullanıcı Tab tuşuyla navigasyon yaparken butonların daha belirgin hale gelmesini sağlayın (focus-visible:ring-4).
// ✨ Eğer count === 0 ise, "Sıfırla" butonu devre dışı kalsın ve soluk görünsün (opacity-50 cursor-not-allowed).



function reducer(count, action) {
  return count - 1
}

export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className='text-center p-8'>
      <h3 className='text-lg font-semibold text-gray-900'>
        Şu anki sayı... {count}
      </h3>
      <div className='mt-6'>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          <MinusIcon className='-ml-0.5 mr-1.5 h-5 w-5' />1
        </button>
      </div>
    </div>
  )
}
