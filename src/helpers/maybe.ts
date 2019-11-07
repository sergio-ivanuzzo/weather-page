export function maybe<T, K1 extends keyof T>(object: T, key1: K1): T[K1];
export function maybe<
    T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    >(object: T, key1: K1, key2: K2): T[K1][K2];

export function maybe<
    T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    >(object: T,
      key1: K1,
      key2: K2,
      key3: K3,
): T[K1][K2][K3];

export function maybe<
    T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    >(object: T,
      key1: K1,
      key2: K2,
      key3: K3,
      key4: K4,
): T[K1][K2][K3][K4];

export function maybe<
    T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    >(object: T,
      key1: K1,
      key2: K2,
      key3: K3,
      key4: K4,
      key5: K5,
): T[K1][K2][K3][K4][K5];

export function maybe<
    T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    >(object: T,
      key1: K1,
      key2?: K2,
      key3?: K3,
      key4?: K4,
      key5?: K5,
): T[K1] | T[K1][K2] | T[K1][K2][K3] | T[K1][K2][K3][K4] | T[K1][K2][K3][K4][K5] {
    let value: any = object && object[key1];

    if (key2) {
        value = value && value[key2];
    }

    if (key3) {
        value = value && value[key3];
    }

    if (key4) {
        value = value && value[key4];
    }

    if (key5) {
        value = value && value[key5];
    }

    return value;
}
