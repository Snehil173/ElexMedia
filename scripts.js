function calculateLoan() {
    // Retrieve form values
    const employeeID = document.getElementById('employeeID').value;
    const designation = document.getElementById('designation').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);

    // Check employee ID validity
    if (employeeID.length < 4 || !employeeID.startsWith('E')) {
      alert('Employee ID must be at least four characters and start with "E"');
      return;
    }

    // Calculate interest based on designation 
    let interest = 0;
    switch (designation.toLowerCase()) {
      case 'manager':
        interest = loanAmount * 0.08;
        break;
      case 'assistant':
        interest = loanAmount * 0.05;
        break;
      default:
        interest = loanAmount * 0.03;
    }
     // Calculate maturity date (Assuming maturity is 1 year from loan date)
     const loanDate = new Date(document.getElementById('loanDate').value);
     const maturityDate = new Date(loanDate.getFullYear() + 1, loanDate.getMonth(), loanDate.getDate());

     // Display calculated values
     document.getElementById('interest').value = interest.toFixed(2);
     document.getElementById('maturityDate').value = maturityDate.toISOString().split('T')[0];
   }
