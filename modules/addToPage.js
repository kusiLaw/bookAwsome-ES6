const addToPage =(book , bookList) =>{
 bookList.innerHTML += `
 <tr class="table-row" >
   <td class="title-col" >"${book.Title}" by ${book.Author}</td>
   <td class="btn-col"><button id="${book.Title}" type="submit" onclick= book.removeBook(this.id)>Remove</button></td>
 </tr>
 `;
}

export default addToPage;