import math
import argparse

parser = argparse.ArgumentParser(description='hello')
parser.add_argument('red', type=int, help='idon')
parser.add_argument('high', type=int, help='idodn')
args = parser.parse_args()

def test(red,high):
    vol = 1 + (red) + (high)
    return vol

if __name__ == '__main__':
    print((test(args.red, args.high)))

