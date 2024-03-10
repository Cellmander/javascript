let valores = [9, 2, 3, 4, 5, 1];
valores.push(1);
valores.sort();
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
