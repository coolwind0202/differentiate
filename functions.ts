/**
 * 変数を表す
 */
type Variable = {
  type: "variable";
};

/**
 * 一般的な関数のオペランド
 */
type _Operand = number | Differentiatable;

/**
 * 一般的な二項演算のオペランド
 */
type _BinaryOperands = {
  /**
   * 1つめのオペランド
   */
  x: _Operand;
  /**
   * 2つめのオペランド
   */
  y: _Operand;
};

/**
 * 足し算関数
 */
type Addition = {
  type: "addition";
} & _BinaryOperands;

/**
 * 引き算関数
 */
type Subtraction = {
  type: "subtraction";
} & _BinaryOperands;

/**
 * 指数関数
 */
type Exponentiation = {
  type: "exponentiation";
  /**
   * 指数
   */
  exponent: _Operand;
  /**
   * 底
   */
  base: _Operand;
};

type Differentiatable = {
  differentiate(): number | Differentiatable;
};
