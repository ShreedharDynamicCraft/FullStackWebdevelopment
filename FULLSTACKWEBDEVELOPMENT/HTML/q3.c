 #include <stdio.h>

int main() {
    int num1, num2;
    printf("Enter two numbers in the range [-999, 999]: ");
    scanf("%d %d", &num1, &num2);

    if (num1 < -999 || num1 > 999 || num2 < -999 || num2 > 999) {
        printf("Wrong Input\n");
    }
    else {
        int temp = num2, reverse_num = 0;

        if (temp >= 0) {
            if (temp >= 100) {
                reverse_num += (temp % 10) * 100;
                temp /= 10;
            }
            if (temp >= 10) {
                reverse_num += (temp % 10) * 10;
                temp /= 10;
            }
            reverse_num += temp;
        }
        else {
            temp = -temp;
            if (temp >= 100) {
                reverse_num += (temp % 10) * 100;
                temp /= 10;
            }
            if (temp >= 10) {
                reverse_num += (temp % 10) * 10;
                temp /= 10;
            }
            reverse_num += temp;
            reverse_num = -reverse_num;
        }

        if (reverse_num == num1) {
            printf("Perfect Pair\n");
        }
        else {
            printf("Not a Perfect Pair\n");
        }
    }

    return 0;
}