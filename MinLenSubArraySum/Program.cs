// Find the minimum number of elements in an array to add to greater or equal to a target

using System;

namespace MinLenSubArraySum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = { 2, 3, 1, 2, 4, 3 };
            int sum = 7;
            Console.WriteLine(FindMinSubArraySumLen(arr,sum));
        }

        static int FindMinSubArraySumLen(int[] arr, int sum)
        {
            int minLen = arr.Length + 1;
            for (int i = 0; i < arr.Length; i++)
            {
                int s = arr[i];
                int len = 1;
                if (s >= sum)
                    minLen = Math.Min(minLen, len);
                for (int j = i+1; j < arr.Length; j++)
                {
                    s += arr[j];
                    len++;
                    if (s >= sum)
                        minLen = Math.Min(minLen, len);
                }

            }
            if (minLen <= arr.Length)
                return minLen;
            return 0;
        }
    }
}
