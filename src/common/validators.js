import classService from "../services/class-service.js";
import courseService from "../services/course-service.js";
import departmentService from "../services/department-service.js";
import roleService from "../services/role-service.js";
import studentService from "../services/student-service.js";
import employeeService from "../services/employee-service.js";

export const isEmailUsed = async (email) => {
    const existingStudent = await studentService.findByEmail(email);
    return existingStudent ? true : false;
}

export const isEmployeeEmailUsed = async (email) => {
    const existingStudent = await employeeService.findByEmail(email);
    return existingStudent ? true : false;
}

export const isDepartmentNameExists = async (name) => {
    const existingDepartment = await departmentService.findByname(name);
    return existingDepartment ? true : false;
}

export const isDepartmentIdExists = async (id) => {
    const existingDepartment = await departmentService.findById(id);
    return existingDepartment ? true : false;
}

export const isClassNameExists = async (name) => {
    const existingClass = await classService.findByName(name)
    return existingClass ? true : false;
}

export const isClassIdExists = async (id) => {
    const existingClass = await classService.findById(id)
    return existingClass ? true : false;
}

export const isRoleNameExists = async (name) => {
    const existingRole = await roleService.findByname(name)
    return existingRole ? true : false;
}

export const isRoleIdExists = async (name) => {
    const existingRole = await roleService.findById(name)
    return existingRole ? true : false;
}

export const isCourseNameExists = async (name) => {
    const existingCourse = await courseService.findByName(name)
    return existingCourse ? true : false;
}