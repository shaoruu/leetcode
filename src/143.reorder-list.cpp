/*
 * @lc app=leetcode id=143 lang=cpp
 *
 * [143] Reorder List
 */

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

// @lc code=start
#include <vector>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
    void reorderList(ListNode *head)
    {
        vector<ListNode *> nodes;

        ListNode *node = head;
        while (node != nullptr)
        {
            nodes.push_back(node);
            node = head->next;
        }

        for (int i = 0; i < nodes.size(); i++)
        {
            ListNode *curr = nodes[i];

            if (i % 2 == 0)
            {
                curr->next = nodes[nodes.size() - i];
            }
            else
            {
                curr->next = nodes[i + 1];
            }
        }
    }
};
// @lc code=end
