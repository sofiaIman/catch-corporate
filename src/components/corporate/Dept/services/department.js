const KEYS = {
    department: 'department',
    departmentId: 'departmentId'
}



export function insertDepartment(data) {
    let department = getAllDepartment();
    data['id'] = generateDepartmentId()
    department.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(department))
}

export function updateDepartment(data) {
    let department = getAllDepartment();
    let recordIndex = department.findIndex(x => x.id == data.id);
    department[recordIndex] = { ...data }
    localStorage.setItem(KEYS.department, JSON.stringify(department));
}

export function generateDepartmentId() {
    if (localStorage.getItem(KEYS.departmentId) == null)
        localStorage.setItem(KEYS.departmentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.departmentId))
    localStorage.setItem(KEYS.DepartmentId, (++id).toString())
    return id;
}

