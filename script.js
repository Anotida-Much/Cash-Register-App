let price = 1.87; // price of item
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]; // cash in drawer

const purchaseBtn = document.getElementById("purchase-btn");
const changeDueDiv = document.getElementById("change-due");

purchaseBtn.addEventListener("click", () => {
  const cash = parseFloat(document.getElementById("cash").value);

  if (isNaN(cash) || cash < price) {
    alert("Customer does not have enough money to purchase the item");
    changeDueDiv.innerText = "";
    return;
  }

  let changeDue = calculateChange(cash, price, cid);

  if (changeDue.status === "INSUFFICIENT_FUNDS") {
    changeDueDiv.innerText = `Status: ${changeDue.status}`;
  } else if (changeDue.change.length === 0) {
    changeDueDiv.innerText = "No change due - customer paid with exact cash";
  } else {
    changeDueDiv.innerText = `Status: ${
      changeDue.status
    }, Change due: ${formatChange(changeDue.change)}`;
  }
});

const convertCidToCents = (cid) => {
  return cid.map(([currency, amount]) => [currency, Math.round(amount * 100)]);
};

const calculateTotalCid = (cid) => {
  return cid.reduce((total, [, amount]) => total + amount, 0);
};

const calculateChange = (cash, price, cid) => {
  let changeCents = Math.round((cash - price) * 100);
  let changeArr = [];
  const cidCents = convertCidToCents(cid);
  const totalCidCents = calculateTotalCid(cidCents);
  const currencyUnits = [
    { name: "ONE HUNDRED", value: 10000 },
    { name: "TWENTY", value: 2000 },
    { name: "TEN", value: 1000 },
    { name: "FIVE", value: 500 },
    { name: "ONE", value: 100 },
    { name: "QUARTER", value: 25 },
    { name: "DIME", value: 10 },
    { name: "NICKEL", value: 5 },
    { name: "PENNY", value: 1 },
  ];

  // Handle exact cash (no change needed)
  if (changeCents === 0) {
    return { status: "OPEN", change: [] };
  }

  // Handle "CLOSED" status if total cash matches change due
  if (totalCidCents === changeCents) {
    return { status: "CLOSED", change: cid };
  }

  for (let unit of currencyUnits) {
    let unitAmount = 0;
    let availableInCents =
      cidCents.find(([name]) => name === unit.name)[1] || 0;

    while (changeCents >= unit.value && availableInCents >= unit.value) {
      changeCents -= unit.value;
      availableInCents -= unit.value;
      unitAmount += unit.value;
    }

    if (unitAmount > 0) {
      changeArr.push([unit.name, unitAmount / 100]);
      cidCents.find(([name]) => name === unit.name)[1] = availableInCents;
    }

    // If we've given all the required change
    if (changeCents === 0) break;
  }

  // If we can't give exact change
  if (changeCents > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: changeArr };
  }
};

const updateCid = (unit, cid, value) => {
  for (let item of cid) {
    if (item[0] === unit) {
      item[1] -= value;
      break;
    }
  }
};

const formatChange = (changeArr) => {
  return changeArr
    .filter(([, amount]) => amount > 0)
    .map(([name, amount]) => `${name}: $${amount.toFixed(2)}`)
    .join(", ");
};
