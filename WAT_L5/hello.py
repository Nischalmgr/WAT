class Student:
    def __init__(self,hi, hello):
        self.hi = hi 
        self.hello= hello
    def ayo(self):
        return f"{self.hello}, {self.hi}"
ok= Student("hi","hello")
print(ok.ayo())

    