package main_test

import (
	"testing"

	. "github.com/JesusValera/simon-says-kata"
)

func TestFoo(t *testing.T) {
	actual := Kata()

	if len(actual) == 0 {
		t.Error("error")
	}
}
