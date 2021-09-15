/*
 * @lc app=leetcode id=56 lang=cpp
 *
 * [56] Merge Intervals
 */

// @lc code=start
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class Solution
{
public:
    vector<vector<int>> merge(vector<vector<int>> &intervals)
    {
        if (intervals.size() == 0)
            return intervals;

        sort(intervals.begin(), intervals.end(), compareInterval);

        vector<vector<int>> merged;

        for (auto interval : intervals)
        {
            if (merged.size() == 0 || interval[0] > merged.back()[1])
                merged.push_back(interval);

            else
                merged.back()[1] = max(interval[1], merged.back()[1]);

            printVector(merged);
        }

        return merged;
    }

private:
    static bool compareInterval(vector<int> a, vector<int> b)
    {
        return a[0] < b[0];
    }

    void printVector(vector<vector<int>> v)
    {
        cout << '[';
        for (auto x : v)
        {
            cout << '[' << x[0] << "," << x[1] << ']' << ',';
        }
        cout << ']' << endl;
    }
};
// @lc code=end
