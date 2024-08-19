export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Castle_Roogna-Piers_Anthony.jpg/220px-Castle_Roogna-Piers_Anthony.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51V8dKJjaWL._SL350_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51qIjzF3bnL._SL350_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Castle Roogna" />
         <img src={book2} alt="Dune" />
         <img src={book3} alt="The City of Gold and Lead" />
      </div>      
   );
}