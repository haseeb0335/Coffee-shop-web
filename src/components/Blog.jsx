import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'The Art of the Perfect Micro-foam',
    excerpt: 'Unlock the master barista secrets to texturing organic milk into dense, silky velvet pour strings.',
    date: 'May 24, 2026',
    readTime: '4 min read',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBIQEhAVEA8PDxAPDxAPEA8PDQ8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi0fHR0tLS0tLS0tLS0rLS0tLS0tLS0rLSstLS0rLS0tLS0tLSstKy8tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIEBAIGCAQFBQAAAAABAAIDBBEFEiExBkFRcSJhEzKBkaGxBxRCUmLB0fAjcqLhFTNjgpIWJDRDRP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACsRAAICAgEDAwIGAwAAAAAAAAABAhEDIRIEMUETMlEicRRCkaHB8QVSYf/aAAwDAQACEQMRAD8A5CJQm3zJlElQ7F+kKWxxTSXEUBZLjCeyAplgupcERKKHY22FONp1JZSuU2ChceSpITZXMo7qTFQK9pcKceSs6fBT0VULkZb/AA3yS2Yaei3dPgBPJWlLw3+FLiHI5uzB3HkpEWAuPJdUg4bP3VNh4Z62CekTbOUR8Nk8lMj4X8l1mLh+Mb/JS2YVEPspWh7OSQ8Lfh+CmR8JE/Z+C6qyiYNmBOiIDklyQUcyi4Mcfs/BP/8AREh2sO5XR8iIsRyCjj/G/BD2Uj5g4OMLczgL+qN7Lk5hXpziyojbR1APizQyMt1JBC8+No7qW7BqilMSSY1emhTT6NIRSlqGVWL6dMuhQOyGQm3KS9iYemhjLkSU5JTACCCCAAggggAIIIIACCOyOyACCWxJASggC5w6nL1d0eHOzAZT7lovopw+CRpe+xeNgbaLpUeGU7pBZrcw6WVxryTJvwc6o+GpXWsw+5aHD+DX6XFu630UIGwsn2sQ5rwhcX5ZmqThZrdz7laQ4HE3ldWoalZVLkyuKIkdCxuzVJbEBsAlFwHNEZgpsaiKDUYamTUJt1V5pWVxZKsklwUI1KbfKUBxJzpgmX1duigPkPVRZpPNFMf0li/EB1UOfEDyUCSRR3z9NeypRE5fBA4vneaZ1zoVziKMLZ8aVZEFiCLnmsF9bAQ412Icm+5OdGFEmYEh2IDqoU+IhKhBzgKHKm5a26iyVKAFSqI9KfKmXOQhiXIkZKSmMCCCNABII7IIAJBHZEgBTUaARoAJGggEAaHhmudEdCR2K6NwpxCWTDMbh2mq5VhZ1WloXEPbbqqTBo9AQYjG5ocDunhWA7D3lYzA3PMY15K3jaeZWbT8Frj5Lp1bbmB2TTq0d1XAAJXpAji2Pkl2RLNUUgzEqI6dNmpHVUoCcyaX+aSZFAfWhNuqSdgq4onkywMyQ+qtzUCzzubJbWNG+qBbHjU32Cac1x8kHVAHQBV9XizW7apOSQ1FsnGNo31TMtZEzmAs5W4w92xsOgVFV1zhdx2HUrL1lZp6Tq2NfSNjQkLImm4GpWDlqT1TuLVRkeXHmdOyrXFamI86c9U06RN3RJhQouSboIJDAklKRJAIQRkIkAGEqyJqUEAEgQlIkAJyoJSCACCMIJQCACsjASrJKALDCvXC2dNCBlcsVhZ8YXRqWjzRg+SF3B9jZYFUD0Y7KbLXNHNZ7Aqd5ba6uBQAestCQPxK+2qAqXnYJwQtHJLBSKpDPo5HbmycFL1KN87W7lRJMTaEmx0TWMaOSW6UBUUuLa6JiTEiealyK4l9LVgc1BmxGypn1l+ahTVR5aqHIaRZ1FW5+gv7LlRZ2ZLeku2+19CUxTVcmumXoU9VT+ksXeJzftONz2WffuXddhl93Dwts37ztFkMUri4kX0BPtWsxCQticb+I+Fo6XWIrICE4QV2ROTqipqyopjPRWUFPmOvJS3UYsuhIxszxCJWlZS2BKqygaYEEEFIwII8pQyoASQisl5UYagViQEdksBCyBiCiSiElAAQRI0ABLCSEoJiFgIiEoI7ICx2hNnDuuq4A7NEOy5REbFb3hnEPDa6Bm6wmYRgqTUYgOqyVRi7YxuqOs4kvcBHIOJtKnGmt5qnquJTyWKmxR7yo/1p10rKNozFHv3OiT9aLtjfzR4Vhn1gN1yNsL9SVqGcPU7GWsSeZub+9S4yY1OKM1FKemqMuLvJWdRh8TNADbzJTUMbb2DfYBcpLGw9ZfBXMzX9QkctRqp31ckbWHQ/2VvFQyEXy5R1cQ1JkgiHr1DB5A3Krgl3ZPNvsikNKBzt7SlU1IC4AE5ibCz7C529YFWboqPczuJ/C0/omc1GPtS98rv0Wb9P5LTl8Enibhp8FNBI92aR7nNkGmVul2AdTYOusRW01gV2PGJ4qjDGzPcQxro3ZrHMDfJqP9ywNTRUkujakAn7wsruK8mbUn4MRDGBfulFaKfg+Y6xSxyDydYqprsJqIR44nADmBce8LVEFNWEBpus+7dWmJPNrKqKTHECeijumVLpTqpGyRHS3Qlo1ZUrFLdAChMRmXxWSMquqilVbPAQqsCMUm6N6aKQxZSSiuhdIYEEEEAKCUEkJQVCFhKakBKugA1bYbXejG6pnORBKhlxV4mXnfRQzMowSwikOx4SlOQO8QPmmAltKdEtnQuHK6wGq1JrQRuuX4XWlq3vD7v4L6p4u2MhkTTs+U9fIDVKU0lbJUW3SLCoDGND5nZGu9Vo1lf2HIeZVecbcLtgjbEPvEZ5D7VUVdU+V5c45nE7lW2CwNuHHe9mg9bE376FefLqJTdLR3RwRgrexTaKaXxSPc6/3ibe5TYMKaOXwUarxN2bKxt3aADXfopkUdU7Rz2xEAZgG5nDpc7D3qIxUn5Y5Wl8DooQEZpR3ROw2U6maQn8LWj5AqLLSytNhO+/T+E/+m4PwWjx1+Uz5X5NZh8Yfh88VrhtzbsQ9Zh2DNdvGCrvguSR0dVGZGyOEXgABa9pLXCzmEXHJUuGcQSucGOiF725tN+1lU3Co89CipW+JFkwADVuZh/CSmrVcWz/AEjRu13i07FbSFwcNW2PTdNVNK1wNtCOY67pPE0uUGCy3qSMFXUtHVC08Honn/2ReE37LHY/wPNC0ywO+swDUlg/isH4m8/Yuo1dA2S9wA8C9x9ofqqhkUkLrscQRr5Efopj1bjqe18mj6eMvbpnGEuJ1iuicZ8NMnifW07AyeEZ6uBos18fOVg6jmOi53ENV3KSkrRyNNOmX+GyK9hiuFS4VDey09LT6JNkkCalVbU0fktQ6FR5aW6nkBiqmjVfLCQtpU0Xkqqpo/JUpDM2QisrOSjTLqdWlYWQcpQUoxIJ0FkcIwUlGEBQsIOKCQSkMMFLCQEoJgLCWEgJQQA4E41NhOBMTJtOV0zB7PwqLL9maQP/AJjcfMFcwgWj4G4lZBNJSzm0E7/A4+rHIbb9AT8e6xyx5RcS8cuMky1ip3FwYPXLwGg6F19LXV+zhmryi/owN7OeL/KyZxnDnRm4s5h1a8AWISaPH5I2hojYSNM7gS/26rzIKEW1ks9GXKSThRcQYJC0fxYntI+217HM/pdce5Puw2Ai7ZJBbYh0w22N3Ej4LPNr3SSB0pDzcWz39G3/AGjRaMxOlaf4wcLaNi8N/O5N1vCWOXZGE45FtsY+vvhcGNqHSk2AY+MSOF+rrtsrI1D3NtI2N34chcfdcqtpaB0IdYNdffMDd3Pa9lKLpLDxMbfcZSSB2JstYTrvf2Mpwvt+o/QyOjcZCRGA05sgsAwbNOup7Kkw+MyTPqHCwc8uu78R5q2bSjUueZBlsCTYA+TbWCDpQNhbS3hc4AjsFGRcqvSQ46uvI/6aw0cS0dMtva4X/JNOnNrbA/v979zyjPn9/tJHtKYkqAD61j73ewclE8iSKjjsfLrPv0br3cQAFGmps8bnW1id72ndLp43yaMbpe9z8yVYVL44ITEDmc4eI8h1XI6dvwdMU00vJTYQLVUItcSF0bm8nMI1BHT9VxfEKMQ1U8LfVhqZom/yskc0fALttJOyljkxSfSOFhZSRnR08p2sPM29gJXIJYXPke92rnvc9x6uc4kn3lep0sHHErOLqZJ5HRZYO3Zaukbos7hsVrLR0x0VSZzjzowo8kSkZ0l7goArpWKuqYFbzBQKgJpgUs0CgzRq0qCqupeuiAEJwF0Sbc7VBWBBRhEiUFCiUSJGkAYSwmwlhUAsJbSmwnGi6QCwnGlKipyVKZQnolzSK4NiYFWVw8bu6uPqxaqqvaQ835n4WH6FF2xU0anhTj2WlaIJ2/WKbaztZGDyJ3C3NKyirhnpJ2hx1MTzZwK4mE/SPLXBzSWuGxaSD71GTHGfuRUMkoe1nXqrCpovWYbdRqPgo8crm7EjsbLI4bx9X0xDfSCaMW8Eozad1qqbj+mlcG1FHZzgCHR2PK65ZdCvys6o9Z/siwixecfbPt1T7cam0vb2tUOPiXBXbvfEeYcHaKbDX4Q/1a5o8nOaPmo/CZl2ZX4jC+6/Ycmxl+Wwt56KMMTk6j2BTj/hpH/nx/8AJn6ogcKHrV7NN7OYpfS52NZ8K/og/WSd3OPbQJ2GQD7F/wCY/kpIxjBWf/Q6X+XMR8AoVX9I+Hwf5FGZHcnSWaPzKa/x+R+50J9ZBdl/Bd0raqYZY2Oy/hGVtu5UfGaqhw1uatlE01s0dHCcznHlm8vM6LFYl9ImIVJLBIKePbJAMpt5u391lgJnFzi5xLnEkuc4kuJ6knddOPpIQ33ZhPqJSVLSNRxFxTUYlKXy2ZExgbBAz/LiaXDbq46XPknmU6z+GtJdp/pj+sH5BauIrpk9HKx6lgsrBmgUeFwUguCwYAdImzKkSFRnyJUBIfKodQ9IkkUWaZCQEWqeqipeplVKqmeRbx7AMudqjTRKCoBooBBAKS0HZCyO6F0gCSmhBoTrQix0KjjU2CJMMT7JFEmXFItKWIK2giaVQQzKzpahYSs6YNE+akBCy+PUtgHez9/Fa+GQEKBitLnY4dRp35IxzaY8sE46MInYDqimjykgoRHULrOAVPuf3yVs1v8A3FuTGC3/ABA/NVM+/sVnROLiJOdhG7tYAH32VIGVs2rnHzPzTSfq4SxxB6plAgwFLoWXJ7KMFMw71j5hNCLKmtfySnQh2hGxukekZHq83HRpAJ96jz1LnCzBlHNxIDj2VvS2JbY7APGbeSr6eEySBg5kkno3mfcFc09JGYSA8F+51t7OyqoJAzO7dxu1ttrc1nJ6NIq3RfcN4UaifLELMZ6z3EnWxA+Z+C02OcPy0jWyEh8TjlzAEFrt7EfmtF9HmDsipmu+07V5/Ed1oeJKQT00kX3mHJfk8atPvAXNyb2dUsMapdzk7J0+2pVI+e2h0I0IO4KDapaUcRdunumJCoDalL9OkwFSPUOpkTssoVdVTJIZDqpVXPenqh6ilaoAXRokE7GEERSmhEUgCSgkpQQMcanGppqcapKQ60pxpTQSgkxj7ZLJ+OqsoYKNS0WmXVNiFlYCsDgsrnslxVR2UemWstaJOM0oJzN/Z/v8+6pFp6d1x4tQRqDrdJm4be8F48I5XFyR5rWLrTMpQb2iiYL7i/dTaJ9gRawP9lCkY5jsrhYj93CehkWi0ZND+JS58rQ27zqbaqTR8MVsjczYC4b2u259hWk4SwUPdnIv5rq2EwsaAB8FlLJvR1w6ZKNyPONXTujeWOaWOG7XAhwPZNxu1HRdY+mLBGvbFUss2QOMb9LZgRcX9oXKYGHOBb7QuB31WsJWrObJHi6JVUWt1EYaCXWucx5fl81Y8NYBJWv1JbHfU8z2UPGA02sdM2o5C/NdY4MpWMgBaNQAoySrSNenxqVt+CZg3AlC1hDoA85bOc4uLtfxLAcecIfUZY3xEmlftmN3RuBF2k897jsV2Wlqm2sNlmuN8P8ArVNJCPXBEsJ/GNQOx1HtWTbWzp9OxrgnEB6HITpZX1VXtyWHrbLmfC9fZtjcOHhcDoWkbg+a2tNKC26ylcVo109nN+N6f0NY+2jZQ2Yd3et/UD71n/Tq245xVtRVnJqyJoiB+8QSXEeVyR7FnC9dMParPMypc3RZMqUs1aqs6S6ROiCwkq1EmqLqK56QSmkMU910hGgmAEEV0EAKYg4IMSnJANIwhZGExoU1OBNtSwpGhxpS7poIwUFDoKUSmwU3K9KgCkkupNHHzKYgj5lSDImJf9LqgIL2jle5W8dI0NDbCxb7FzPCZv4oWyfUXaD0U+Tpg1xMvxRDmlNrXvpyG2yomF0bhfqLq9x0Eku53uqOR+bdXZhJbOs8EztyFp3stJg9S65aTsSFy7h3EC0NN+Wq2NJirwQRbVc7+l7O6E00SPpIJfSSC/quY/tY2/NciDWg3O/ddQ4mlL6OfMbkx39xBXJZO/wsrwytM5upj9S+w7M4yODGNLj0aCST2XReEsXdGGtf4TYBzTyK55SVj4tWmynUOLPMmZ23lpZVNWLDLgdlpq9t7ggc8v6Jc1YHkk8xYDosFR4ttqrqLEQ7msZ3VHUpKTsr8YpfR1WdgsJvEbff2P5H2pGN4q6npiQbPf4G67X3KTxDi8cfo8x1u46anlf8ljcexg1LhYWjYLNHPuUQi5VZjlyKN0VznJsuSSUgldRxC8yIuSLoXQAq6CJGEABElhhShGgBqyCfyIIAaYllBBIBBCJBBIaFBKCCCBigjQQQMF0046oIJiY8DogggkMdpHWddaWlqtEEFLNIEHFX3BWcJRoKkRItMPlLQPetRQV2gQQWckawZNxCrzwyN6xuHwXP5YdUSCMXZjy7oIxJdNoT7kSC0Mixp5iDurulqHW3QQWcjSL2UPElQXStH3WfEnX5BU5KCC0h2RhP3MSURQQVEhIXQQQAtoTzQggmhMO6SXoIJghPpEEEFIz/2Q=='
  },
  {
    id: 'post-2',
    title: 'Sourcing Single-Origin Beans',
    excerpt: 'Journey behind the roast to explore how sustainable micro-lot farming shifts flavor notes.',
    date: 'May 18, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-coffee-darkest text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW HEADER HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-coffee-accent font-medium block">Behind The Roast</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">Lounge Journal & Guides</h2>
            <div className="w-12 h-[1px] bg-coffee-accent/30 mt-3"></div>
          </div>
          
          <button className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-coffee-accent font-bold hover:text-white transition-colors bg-transparent border-none cursor-pointer group">
            <span>Read All Articles</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* TWO COLUMN HORIZONTAL magazine editorial row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-coffee-dark/20 border border-coffee-accent/5 hover:border-coffee-accent/15 rounded-2xl overflow-hidden shadow-xl flex flex-col sm:flex-row transition-all duration-300 group"
            >
              {/* Cover Banner Graphic Image */}
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Meta Content layout fields */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  
                  {/* Meta tag dates */}
                  <div className="flex items-center space-x-4 text-[10px] uppercase tracking-wider text-white/40 font-mono">
                    <span className="flex items-center space-x-1">
                      <Calendar size={10} className="text-coffee-accent" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={10} className="text-coffee-accent" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-white font-medium tracking-wide group-hover:text-coffee-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-coffee-accent/5">
                  <span className="text-[10px] uppercase tracking-widest text-coffee-cream font-semibold group-hover:text-white transition-colors">
                    Read Guide →
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}