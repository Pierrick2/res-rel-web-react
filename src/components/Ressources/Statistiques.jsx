// import React, { useState, useEffect } from "react";
// import RessourceService from "../../services/RessourceService";

// export default function Statistiques() {
//   const [categories, setCategories] = useState([]);
//   const [favorisCounts, setFavorisCounts] = useState([]);

//   useEffect(() => {
//     RessourceService.getCategories().then((response) => {
//       setCategories(response.data);
//     });

//     RessourceService.getFavorisCountsByCategory().then((response) => {
//       setFavorisCounts(response.data);
//     });
//   }, []);

//   const data = React.useMemo(() => {
//     return categories.map((category, index) => {
//       return {
//         id: index + 1,
//         categorie: category.nom,
//         favoris: favorisCounts[index] ? favorisCounts[index].count : 0,
//       };
//     });
//   }, [categories, favorisCounts]);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "ID",
//         accessor: "id",
//       },
//       {
//         Header: "Catégorie",
//         accessor: "categorie",
//       },
//       {
//         Header: "Nombre de ressources en favoris",
//         accessor: "favoris",
//       },
//     ],
//     []
//   );


//   return (
//     <div className="table-container">
//       <table {...getTableProps()} className="table is-striped is-hoverable">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
