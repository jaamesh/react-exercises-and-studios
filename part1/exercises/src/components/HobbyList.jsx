export default function HobbyList() {
    let pageTitle = "My Book Hobby Links";
    let hobby1 = "https://www.amazon.com/b/";
    let hobby2 = "https://www.walmart.com/cp/books/3920";
    let hobby3 = "https://www.audible.com/";
 
    return (
       <div>
          <h3>{pageTitle}</h3>
          <ul>
            <li><a href={hobby1} alt="Amazon">Amazon</a></li>
            <li><a href={hobby2} alt="Wal-Mart">Wal-Mart</a></li>
            <li><a href={hobby3} alt="Audible">Audible</a></li>
          </ul>   
       </div>      
    );
 }