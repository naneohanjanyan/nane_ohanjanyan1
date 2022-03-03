#include <iostream>
using namespace std;
int main ()
{
int a, b;
cout << " Remember number: \n";
cin >> a;
while (a <=0 || a>=100){
 cout << " Remember number: \n";
 cin >> a;
}

do{
  cout << "\n Number = ";
  cin >> b;
  if(a < b) cout << " a < " << b;
  else if (a > b) cout << " a > " << b;
}while (a != b);



return 0;
}


