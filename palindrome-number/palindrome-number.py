class Solution:
    def isPalindrome(self, x: int) -> bool:
        # convert x to a string
        x=str(x)
        # Reverse the string and compare x original  value
        if x[::-1]==x:
            return True