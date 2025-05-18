import axios, { isAxiosError, isCancel } from "axios";
import { baseUrl } from "../config/config";
import { Gender } from "../interfaces/IGender";

const sURL = `${baseUrl}/student`;

export default class Student {
  public first_name: string;
  public last_name?: string;
  public mobile: string;
  public id: string;
  public email?: string;
  public school: string;
  public guardian: string;
  public address: string;
  public grade: string;
  public gender: Gender;
  public is_active?: Boolean;

  constructor({
    id,
    first_name,
    last_name,
    email,
    mobile,
    school,
    guardian,
    address,
    grade,
    gender,
    is_active,
  }: {
    id: string;
    first_name: string;
    last_name?: string;
    email?: string;
    mobile: string;
    school: string;
    guardian: string;
    address: string;
    grade: string;
    gender: Gender;
    is_active: Boolean;
  }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.mobile = mobile;
    this.school = school;
    this.guardian = guardian;
    this.address = address;
    this.grade = grade;
    this.gender = gender;
    this.is_active = is_active;
  }

  public static async search(value: string) {
    return await axios.get(`${sURL}/search?value=${value}`);
  }

  public static async activate(id: string) {
    return await axios.post(`${sURL}/activate`, { id: id });
  }

  public static async deactivate(id: string) {
    return await axios.post(`${sURL}/deactivate`, { id: id });
  }

  public static async fetchStudent(id: string) {
    return await axios.get(`${sURL}/${id}`);
  }

  public static async fetchAllStudents() {
    return await axios.get(sURL);
  }

  public static async registerStudent(studentInfo: any) {
    await axios.post(`${sURL}/register`, studentInfo);
  }

  public static async deleteStudent(id: string) {
    await axios.delete(`${sURL}/${id}`);
  }
}
