import json
import os

FILE_NAME = 'students.json'

def load_data():
    if not os.path.exists(FILE_NAME):
        return[]
    with open(FILE_NAME,'r') as file:
        return json.load(file)

def save_data(data):
    with open(FILE_NAME,'w') as file:
        json.dump(data,file,indent=4)
def add_student( ):
    students=load_data()
    name = input("Enter student name:")
    age = input("Enter student age:")
    grade = input("Enter student grade:")
    id = len(students) + 1
    students.append({
        'id':id,
        'name':name,
        'age':age,
        'grade':grade
    })
    save_data(students)
    print("Student added successfully.")

def view_students():
        students= load_data()
        if not students:
            print("no students found")
            return
        for s in students:
            print(s)
    
def viewbyId():
        students = load_data()
        id = int (input("enter student id"))
        for s in students:
            if s['id'] == id:
                print(s)
                return
        print("student not found")        
 
def delete():
    students = load_data()
    id = int(input("enter stident id tp delete:"))
    new_students = [s for s in students if s['id']!=id]
    if len(new_students)== len(students):
        print("studnets not found")
    else:
          save_data(new_students)
          print("student deleted successfully")
def main():
    while True:
        print("\nWelcome to the Student Management System!")
        print("-------------------------------------")
        print("1. Add New Student")
        print("2. View All Students")
        print("3. View Student by ID")
        print("4. Update Student")
        print("5. Delete Student")
        print("6. Exit")
        print("-------------------------------------")

        choice = input("Enter your choice: ")

        if choice == "1":
            add_student()
        elif choice == "2":
            view_students()
        elif choice == "3":
            viewbyId()
     
        elif choice == "4":
            delete()
        elif choice == "5":
            print("👋 Exiting... Goodbye!")
            break
        else:
            print("⚠ Invalid choice, try again!\n")

if __name__ == "__main__":
    main()