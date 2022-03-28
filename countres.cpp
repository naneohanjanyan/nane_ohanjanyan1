include <iostream>
#include <fstream>
#include <cstring>

using namespace std;

enum PhoneCodes {
  Armenia = 374,
  Georgia = 995,
  France = 33,
  China = 86,
  Belarus = 375
};
struct information{
  string countryName;
  string capital;
  string domain;
  double GDP;
  long population;
  long area;
  int phonecode;
};

int main(int argc, char *argv[]) {

PhoneCodes PhoneCode;
int arr_PhoneCode[5] = {Armenia, Georgia, France, China, Belarus};

struct information info[7];
ifstream file;
file.open("countr.txt");
string str = "", info_string[6];
int i = 0, j = 0;
while(!file.eof()){
  file >> str;
  info_string[i] = str;
  if( i == 5) {
    info[j].countryName = info_string[0].substr(0, info_string[0].size()-1);
    info[j].capital = info_string[1].substr(0, info_string[1].size()-1) ;
    info[j].domain = info_string[2].substr(0, info_string[2].size()-1);
    info[j].population = stol(info_string[3].substr(0, info_string[3].size()-1));
    info[j].area = stol(info_string[4].substr(0, info_string[4].size()-1));
    info[j].GDP = stod(info_string[5]);
    info[j].phonecode = arr_PhoneCode[j];
    j++;
    i = -1;
  }
  i++;
 }
file.close();

string s = argv[1];
if (s == "search") {
  string input = "";
  string name = "";
  cout << "Input search mode (countryName / capital / domain): ";
  cin >> input;
  cout << "Input name serach mode " << input << ":";
  cin >> name;
  if (input == "capital") {
    for (int i = 0; i < 6; i++) {
      if (info[i].capital == name) {
        cout << " Country: " << info[i].countryName << endl;
        cout << " Capital: " << info[i].capital << endl;
        cout << " Domain: " << info[i].domain << endl;
        cout << " GDP: " << info[i].GDP << endl;
        cout << " Population: " << info[i].population << endl;
        cout << " Area: " << info[i].area << endl;
        cout << " Phone Code: " << info[i].phonecode << endl;
      }
    }
  } else if (input == "countryName") {
    for (int i = 0; i < 6; i++) {
      if (info[i].countryName == name) {
        cout << " Country: " << info[i].countryName << endl;
        cout << " Capital: " << info[i].capital << endl;
        cout << " Domain: " << info[i].domain << endl;
        cout << " GDP: " << info[i].GDP << endl;
        cout << " Population: " << info[i].population << endl;
        cout << " Area: " << info[i].area << endl;
        cout << " Phone Code: " << info[i].phonecode << endl;
      }
    }
  } else if (input == "domain") {
    for (int i = 0; i < 6; i++) {
      if (info[i].domain == name) {
        cout << " Country: " << info[i].countryName << endl;
        cout << " Capital: " << info[i].capital << endl;
        cout << " Domain: " << info[i].domain << endl;
        cout << " GDP: " << info[i].GDP << endl;
        cout << " Population: " << info[i].population << endl;
        cout << " Area: " << info[i].area << endl;
        cout << " Phone Code: " << info[i].phonecode << endl;
      }
    }
  } else {
    cout << "Input search mode (countryName / capital / domain): " << endl;
 }
}

if(s == "compare"){
  information countryName1, countryName2;
  string country1,country2;
  cout << " Input first country: ";
  getline(cin,country1);
  cout << " Input second country: ";
  getline(cin,country2);


  for (int  i = 0; i < 5;i++) {
      if(country1 == info[i].countryName) {
        countryName1.countryName = info[i].countryName;
        countryName1.capital = info[i].capital;
        countryName1.domain = info[i].domain;
        countryName1.population = info[i].population;
        countryName1.area =info[i].area;
        countryName1.GDP = info[i].GDP;
        countryName1.phonecode = info[i].phonecode;

      }
      if(country2 == info[i].countryName) {
        countryName2.countryName = info[i].countryName;
        countryName2.capital = info[i].capital;
        countryName2.domain = info[i].domain;
        countryName2.population = info[i].population;
        countryName2.area =info[i].area;
        countryName2.GDP = info[i].GDP;
        countryName2.phonecode = info[i].phonecode;
      }

  }
  char simbol;

 if(countryName1.population < countryName2.population) {

    simbol = '<';
 }

 else if (countryName1.population > countryName2.population){

    simbol = '>';
 }

 else {
   simbol = '=';
 }
    cout << "============================================== \n\t\t| " << country1 << " | " << country2 << "\n==============================================\n";

  cout << "Capital\t\t| " << countryName1.capital <<  " | " << countryName2.capital;
                       /*      countryName1.capital 
                             countryName1.domain 
                             countryName1.population 
                             countryName1.area 
                             countryName1.GDP
                             countryName1.phonecode 
  */

}
                                                                                                                                                                   147,1         80%

