const st=["priya","sneha","anita","neha","meena"];
console.log(st[0]); // Output: priya
console.log(st[4]);
st.push("karthik");     
console.log(st); // Output: ["priya", "sneha", "anita", "neha", "meena", "karthik"]
st.pop();
console.log(st);
const st1=st.slice(1,4);
console.log(st1); // Output: ["sneha", "anita", "neha"]
st.splice(2, 2);
console.log(st); // Output: ["priya", "sneha", "karthik"]
console.log(st.includes("priya")); // Output: tru

const st3=[100,200,300,400,500];
const incresed=st3.map(st3 => st3 + 50);
console.log(incresed); // Output: [150, 250, 350, 450, 550]


const products=[
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 200 },
      { name: "Product 3", price: 300 },
      { name: "Product 4", price: 400 },
      { name: "Product 5", price: 500 }
];

const t_p = products.filter(products => products.price > 300);
console.log(t_p); // Output: [{ name: "Product 4", price: 400 }, { name: "Product 5", price: 500 }]



let num=[10,23,45,76,12];
let r=num.array((num)=>(return num>14));
console.log(r); // Output: [10, 76, 12]