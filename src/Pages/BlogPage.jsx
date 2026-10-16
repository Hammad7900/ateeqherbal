import React from "react";
import { Link } from "react-router-dom";

// Yeh sabhi blogs ka data hai
export const blogsData = [
  {
   id: 1,
    category: "Digestive Health",
    date: "October 2026",
    title: "Mede Ki Tezabiyat Ka Qudrati Ilaj",
    
    // Yahan yeh naya link paste kar dein
    image: "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    shortDesc: "Janiye kis tarah Ateeq Herbal ka Mukammal Meda Course purani tezabiyat, gas, aur badhazmi ko theek karta hai aur bhook barhata hai.",
    content: (
      <>
        <p>Aaj kal ke naqis khaan-paan ki wajah se mede ki takaleef jaisay jalan, tezabiyat (acidity), aur badhazmi har dosre shakhs ka masla ban chuki hain. Agar iska bar-waqt ilaj na kiya jaye toh yeh mede ke ulcer ki shakal ikhtiyar kar leta hai.</p>
        <p><strong>Bachaaw Ke Tareeqay:</strong></p>
        <ul>
          <li>Khana hamesha chaba kar khayein aur bhook rakh kar khayein.</li>
          <li>Ziyada mirch masale aur bahar ke khaanay (junk food) se parhaiz karein.</li>
          <li>Khaanay ke fauran baad pani peenay se guraiz karein.</li>
        </ul>
        <p><strong>Ateeq Herbal Ka Hal:</strong> Agar aap puranay mede ke masail se pareshan hain toh hamara <em>"Mukammal Meda Course"</em> aapke liye behtareen hal hai. Iksir e sozish, sharbat-e-taskeen, aur safoof e narmashk se tayar karda yeh course mede ki andaruni sozish ko khatam kar ke hazme ko taqatwar banata hai.</p>
      </>
    )
  },
  {
    id: 2,
    category: "Men's Health",
    date: "October 2026",
    title: "Khoshgawar Azdawaji Zindagi Ka Raaz",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    shortDesc: "Zaafran aur Ginseng se tyar karda hamara khas Shadi Course jo khoyi hui taqat, tawanai aur aitemad ko bahal karne mein madad deta hai.",
    content: (
      <>
        <p>Insani jism mein waqt ke sath ya mukhtalif wajohat ki bina par aasaabi aur jismani kamzori paida ho sakti hai, jo azdawaji zindagi par asar andaz hoti hai.</p>
        <p><strong>Ateeq Herbal Ka Shadi Course:</strong></p>
        <p>Khales zaafran, ginseng, salajeet aur nayab jari bootiyon se tayar karda yeh course mardana sehat ki bahali ke liye aik mukammal nuskha hai. Is ke fawaid mein shamil hain:</p>
        <ul>
          <li><strong>Tawanai Ki Bahali:</strong> Jismani susti aur thakawat ko door kar ke jism mein nayi jaan paida karta hai.</li>
          <li><strong>Qowat o Aitemad:</strong> Qudrati qowat aur bardasht bahal karta hai taake zindagi mein bharpoor khushi hasil ho.</li>
          <li><strong>Andaruni Ilaj:</strong> Khoon, aasaab aur pathon ko taqat deta hai, jis se daimi kamzori ka khatma hota hai.</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    category: "Wellness Guides",
    date: "October 2026",
    title: "Jari Bootiyon Se Jismani Kamzori Ka Ilaj",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    shortDesc: "Thakawat, susti aur aasaabi kamzori ko door karne ke liye qudrati jari bootiyon aur safoof ka sahi istemal aur unke fawaid janiye.",
    content: (
      <>
        <p>Qudrat ne jari bootiyon mein aisi shifa rakhi hai jo baghair kisi nuqsan ke hamare jism ko taqat faraham karti hai. Aaj ke is daur mein thakawat aur susti aam masla hai.</p>
        <p><strong>Zaroori Jari Bootiyan:</strong></p>
        <ul>
          <li><strong>Ashwagandha (Asgandh Nagori):</strong> Yeh zehni dabao aur aasaabi kamzori ko door karne ke liye behtareen hai.</li>
          <li><strong>Shatavari:</strong> Yeh jism ko qudrati tawanai faraham karti hai aur thakawat ko khatam karti hai.</li>
          <li><strong>Salajeet:</strong> Paharron se nikalne wala yeh qudrati madah jism ko faulad ki tarah mazboot banata hai.</li>
        </ul>
        <p>Ateeq Herbal ki tamam products inhi khales ajzaa se tayar ki jati hain, taake aapko 100% qudrati fayda mil sake.</p>
      </>
    )
  }
];

const BlogPage = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "50px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ color: "#2E5C31", fontSize: "36px", marginBottom: "10px" }}>Ateeq Herbal Blog</h1>
        <p style={{ color: "#666", fontSize: "18px" }}>Qudrati zindagi, sehat aur jari bootiyon ke raaz</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
        {blogsData.map((blog) => (
          <div 
            key={blog.id} 
            style={{ 
              width: "350px", 
              background: "#fff", 
              borderRadius: "15px", 
              overflow: "hidden", 
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              border: "1px solid #eee",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              style={{ width: "100%", height: "220px", objectFit: "cover" }} 
            />
            
            <div style={{ padding: "25px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#2E5C31", fontWeight: "bold", marginBottom: "15px" }}>
                <span>{blog.category}</span>
                <span style={{ color: "#888" }}>{blog.date}</span>
              </div>
              
              <h3 style={{ margin: "0 0 15px 0", fontSize: "22px", color: "#333", lineHeight: "1.4" }}>
                {blog.title}
              </h3>
              
              <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px", flexGrow: 1 }}>
                {blog.shortDesc}
              </p>

              <Link 
                to={`/blog/${blog.id}`} 
                style={{ color: "#2E5C31", textDecoration: "none", fontWeight: "bold", fontSize: "15px" }}
              >
                Read full article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;