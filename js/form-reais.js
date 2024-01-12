function formatCurrency(input) {
  const value = input.value.replace(/\D/g, "");

  const formattedValue = `R$ ${(value / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })}`;

  input.value = formattedValue;
}
