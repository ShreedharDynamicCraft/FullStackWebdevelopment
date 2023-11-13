#include <stdio.h>

int main() {
    float x1, y1, z1, x2, y2, z2, x3, y3, z3;

    printf("Enter coordinates of point A (x1 y1 z1): ");
    scanf("%f %f %f", &x1, &y1, &z1);
    printf("Enter coordinates of point B (x2 y2 z2): ");
    scanf("%f %f %f", &x2, &y2, &z2);
    printf("Enter coordinates of point C (x3 y3 z3): ");
    scanf("%f %f %f", &x3, &y3, &z3);

    printf("\nThe given points are:\n");
    printf("A (%.2f, %.2f, %.2f)\n", x1, y1, z1);
    printf("B (%.2f, %.2f, %.2f)\n", x2, y2, z2);
    printf("C (%.2f, %.2f, %.2f)\n", x3, y3, z3);

    float slope1 = (y2 - y1) / (x2 - x1);
    float slope2 = (y3 - y2) / (x3 - x2);

    if (slope1 == slope2) {
        printf("\nThe given three points are collinear.\n");
    } else {
        printf("\nThe given three points are not collinear.\n");
    }

    if (x1 < x2 && x1 < x3) {
        printf("\nA < ");
        if (x2 < x3) {
            printf("B < C\n");
        } else {
            printf("C < B\n");
        }
    } else if (x2 < x1 && x2 < x3) {
        printf("\nB < ");
        if (x1 < x3) {
            printf("A < C\n");
        } else {
            printf("C < A\n");
        }
    } else {
        printf("\nC < ");
        if (x1 < x2) {
            printf("A < B\n");
        } else {
            printf("B < A\n");
        }
    }

    return 0;
}