export default function createIteratorObject(report) {
  let departments = Object.entries(report);
  let index = 0;
  return {
      next: function() {
          if (index < departments.length) {
              let department = departments[index][1];
              let employees = Object.entries(department);
              let empIndex = 0;
              index++;
              return {
                  nextEmp: function() {
                      if (empIndex < employees.length) {
                          let employee = employees[empIndex];
                          empIndex++;
                          return {
                              value: employee,
                              done: false
                          }
                      } else {
                          return {
                              done: true
                          }
                      }
                  }
              }
          } else {
              return {
                  done: true
              }
          }
      }
  }
}