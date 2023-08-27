#include <stdio.h>

int main() {
    int num1, num2, num3, num4, num5;
    int odd_count = 0, even_count = 0;
    int largest_even = 0;
    int odd1 = 0, odd2 = 0, odd3 = 0;

    printf("Enter five integers: ");
    scanf("%d %d %d %d %d", &num1, &num2, &num3, &num4, &num5);

    if (num1 % 2 != 0) {
        odd_count++;
        odd1 = num1;
    } else {
        if (num1 > largest_even) {
            largest_even = num1;
        }
        even_count++;
    }
    
    if (num2 % 2 != 0) {
        odd_count++;
        odd2 = num2;
    } else {
        if (num2 > largest_even) {
            largest_even = num2;
        }
        even_count++;
    }

    if (num3 % 2 != 0) {
        odd_count++;
        odd3 = num3;
    } else {
        if (num3 > largest_even) {
            largest_even = num3;
        }
        even_count++;
    }

    if (num4 % 2 != 0) {
        odd_count++;
    } else {
        if (num4 > largest_even) {
            largest_even = num4;
        }
        even_count++;
    }

    if (num5 % 2 != 0) {
        odd_count++;
    } else {
        if (num5 > largest_even) {
            largest_even = num5;
        }
        even_count++;
    }

    if (odd_count == 3) {
        if (odd1 < odd2 && odd1 < odd3) {
            printf("Smallest three odd numbers: %d ", odd1);
            if (odd2 < odd3) {
                printf("%d %d\n", odd2, odd3);
            } else {
                printf("%d %d\n", odd3, odd2);
            }
        } else if (odd2 < odd1 && odd2 < odd3) {
            printf("Smallest three odd numbers: %d ", odd2);
            if (odd1 < odd3) {
                printf("%d %d\n", odd1, odd3);
            } else {
                printf("%d %d\n", odd3, odd1);
            }
        } else {
            printf("Smallest three odd numbers: %d ", odd3);
            if (odd1 < odd2) {
                printf("%d %d\n", odd1, odd2);
            } else {
                printf("%d %d\n", odd2, odd1);
            }
        }
    } else if (even_count == 3) {
        if (largest_even != 0) {
            printf("Largest number is %d\n", largest_even);
        } else {
            printf("There are not exactly three even numbers.\n");
        }
    } else {
        printf("There are not exactly three odd or three even numbers.\n");
    }

    return 0;
}
