#include <iostream>

using namespace std;

int main() 
{
    long long int x;
    
    while (true) {
        cin >> x;

        if (x < 0) cout << false << endl;
        
        // x > 0
        int copy = x;

        int reversed = 0;

        while (copy != 0) {
            reversed *= 10;
            reversed += copy % 10;
            copy     /= 10;
        }

        bool isP = true;

        while (x != 0) {
            int parsedX = x % 10;
            int parsedR = reversed % 10;

            if (parsedX != parsedR) {
                isP = false;
                break;
            }                

            x        /= 10;
            reversed /= 10;
        }

        if (isP) 
            cout << "true" << endl;
        else
            cout << "false" << endl;
    }
}
