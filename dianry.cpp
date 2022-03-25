#include <iostream>
#include <fstream> 
#include <string.h>
using namespace std;
 
struct date {
  string date;
  string command;
  string note;

}d;



int main() {
   
string str = "";

do{
 
  cout << "  Input date: ";
  getline(cin,d.date);

  cout << " Input note: ";
  getline(cin, d.note);
  ofstream diary;
  diary.open(d.date + ".txt");
  str += d.note + " \n";
  diary << str;

  cout << " Input command ( add or exit) ";
  getline(cin, d.command);

}while(d.command == "add");
   
return 0;
 
 }
