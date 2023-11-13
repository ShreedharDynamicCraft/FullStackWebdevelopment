#include <stdio.h>

int main() {
    int num1, num2, num3, num4, num5;
    int odd_count = 0, even_count = 0;
    int smallest_odd1 = 0, smallest_odd2 = 0, smallest_odd3 = 0;
    int largest_even = 0;
    
    printf("Enter five numbers: ");
    scanf("%d%d%d%d%d", &num1, &num2, &num3, &num4, &num5);
    
    if (num1 % 2 == 1) {
        odd_count++;
        smallest_odd1 = num1;
    }
    else {
        even_count++;
        if (num1 > largest_even) {
            largest_even = num1;
        }
    }
    
    if (num2 % 2 == 1) {
        odd_count++;
        if (num2 <= smallest_odd1 || smallest_odd1 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = smallest_odd1;
            smallest_odd1 = num2;
        }
        else if (num2 <= smallest_odd2 || smallest_odd2 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = num2;
        }
        else if (num2 <= smallest_odd3 || smallest_odd3 == 0) {
            smallest_odd3 = num2;
        }
    }
    else {
        even_count++;
        if (num2 > largest_even) {
            largest_even = num2;
        }
    }
    
    if (num3 % 2 == 1) {
        odd_count++;
        if (num3 <= smallest_odd1 || smallest_odd1 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = smallest_odd1;
            smallest_odd1 = num3;
        }
        else if (num3 <= smallest_odd2 || smallest_odd2 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = num3;
        }
        else if (num3 <= smallest_odd3 || smallest_odd3 == 0) {
            smallest_odd3 = num3;
        }
    }
    else {
        even_count++;
        if (num3 > largest_even) {
            largest_even = num3;
        }
    }
    
    if (num4 % 2 == 1) {
        odd_count++;
        if (num4 <= smallest_odd1 || smallest_odd1 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = smallest_odd1;
            smallest_odd1 = num4;
        }
        else if (num4 <= smallest_odd2 || smallest_odd2 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = num4;
        }
        else if (num4 <= smallest_odd3 || smallest_odd3 == 0) {
            smallest_odd3 = num4;
        }
    }
    else {
        even_count++;
        if (num4 > largest_even) {
            largest_even = num4;
        }
    }
    
    if (num5 % 2 == 1) {
        odd_count++;
        if (num5 <= smallest_odd1 || smallest_odd1 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 = smallest_odd1;
            smallest_odd1 = num5;
        }
        else if (num5 <= smallest_odd2 || smallest_odd2 == 0) {
            smallest_odd3 = smallest_odd2;
            smallest_odd2 =smallest_odd3;
            smallest_odd1=num5;
        }
                    else if (num5 <= smallest_odd3 || smallest_odd3 == 0) {
            smallest_odd3 = num5;
        }
    }
    else {
        even_count++;
        if (num5 > largest_even) {
            largest_even = num5;
        }
    }
    
    if (odd_count == 3) {
        printf("Smallest three odd numbers: %d %d %d", smallest_odd1, smallest_odd2, smallest_odd3);
    }
    else if (even_count == 3) {
        printf("Largest number: %d", largest_even);
    }
    
    return 0;
}

