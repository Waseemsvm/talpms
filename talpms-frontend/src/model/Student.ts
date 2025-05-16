import axios from "axios";
import { baseUrl } from "../config/config";

export default class Student {
  constructor() {}

  public static async fetchStudent(id: string) {
    return await axios.get(`${baseUrl}/student/${id}`);
  }

  public static async fetchAllStudents() {
    return await axios.get(`${baseUrl}/student`);
  }

  public static async registerStudent(studentInfo: any) {
    await axios.post(`${baseUrl}/student/register`, studentInfo);
  }

  public static async deleteStudent(id: string) {
    await axios.delete(`${baseUrl}/student/${id}`);
  }
}
