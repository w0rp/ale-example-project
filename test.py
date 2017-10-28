def foo(x: int) -> int:
    return x * 2


def bar(x: int) -> int:
    return foo(x)


def main():
    pass


if __name__ == "__main__":
    print(bar(3))
